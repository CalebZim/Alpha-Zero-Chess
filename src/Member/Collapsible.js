import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }

    render(){
        const {title} = this.props;
        return (
            <div className='title'>
                <div className="panel-heading">
                   <a href={`https://www.chess.com/member/${title}`} className='link members' target='blank' title={`View @${title}'s profile on chess.com `}> <h2>{title}</h2> </a>
                </div>
            </div>
        )
    }

}

Collapsible.propTypes = {
    title: PropTypes.string,
};

export default Collapsible;