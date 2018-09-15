//import React from 'react';
/*
id: wallet address,
size: shares,
color: tbd, maybe ip? maybe some math formula with wallet address?

source: referral address,
target: referred address
*/
import React, { Component } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import '../../styles/scss/data-viz.scss';

export default class DataViz extends Component {
    constructor(props) {
        super(props);
    
        this.genRandomTree = this.genRandomTree.bind(this);
    }
    
    genRandomTree(N) {
        return {
          nodes: [...Array(N).keys()].map(i => ({ id: i })),
            links: [...Array(N).keys()]
          .filter(id => id)
          .map(id => ({
            source: id,
            target: Math.round(Math.random() * (id-1))
          }))
        };
      }

    render () {
        const GROUPS = 12;
        const gData = this.genRandomTree(300);
        return (
            <div>
                <ForceGraph3D 
                    graphData={gData}
                    nodeAutoColorBy={d => d.id%GROUPS}
                    linkAutoColorBy={d => gData.nodes[d.source].id%GROUPS}
                    linkWidth={2}
                    width={800}
                    height={600}
                    backgroundColor='transparent'
                    showNavInfo={false}
                />  
            </div>
        );
    }
}