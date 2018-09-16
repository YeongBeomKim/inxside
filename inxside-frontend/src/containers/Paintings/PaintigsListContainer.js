import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaintingsList from 'components/Paintings/PaintingsList';
import {PaintingsActions} from 'store/actionCreators';
class PaintigsListContainer extends Component {
    initialize = async () => {
        try{
            await PaintingsActions.getPaintings();
        } catch(e){
            console.log(e);
        }
    }
    componentDidMount(){
        this.initialize();
    }
    render() {
        const {

        } = this;
        const {
            paintings,
            width
        } = this.props;
        return (
            <PaintingsList 
                paintings= {paintings}
                width = {width}
            />
        );
    }
}

export default connect(
    (state)=>({
        paintings: state.paintings.get('paintings'),
        width: state.base.windowWidth,
    }),
    ()=>({}),
)(PaintigsListContainer);