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
        const {title, date} = this.props;
        return (
            <div className='fl w-third pa2'>
                <a href={`https://www.chess.com/member/${title}`} className='link members' target='blank' >
                    <article class="center br3 pa3 pa4-ns mv3 ba b--black-10 card">
                        <div class="tc">
                            <h1 class="f3 mb2">{title}</h1>
                            <h2 class="f5 fw4 gray mt0">Date to Join Club: <br />{Date(date)}</h2>
                        </div>
                    </article>
                </a>
            </div>
        )
    }

}

Collapsible.propTypes = {
    title: PropTypes.string,
    date: PropTypes.number,
};

export default Collapsible;