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
            <a href={`https://www.chess.com/member/${title}`} className='members' target='blank'><article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <h1 class="f4">{title}</h1>
            </article></a>
        )
    }

}

Collapsible.propTypes = {
    title: PropTypes.string,
    date: PropTypes.number,
};

export default Collapsible;