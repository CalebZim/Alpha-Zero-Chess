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
        const {title, time_class, id} = this.props;
        return (
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            
                <div class="tc">
                    <h1 class="f4">{title}</h1>
                    <hr class="mw3 bb bw1 b--black-10" />
                </div>
                <p class="lh-copy measure center f6 black-70">
                {`Time Class: ${time_class}`}
                {id}
                </p>
            </article>
        )
    }

}

Collapsible.propTypes = {
    title: PropTypes.string,
    time_class: PropTypes.string,
};

export default Collapsible;

// 7