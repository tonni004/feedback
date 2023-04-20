import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    normalizeTitle = (title) => {
        return title[0].toUpperCase() + title.slice(1);
    }

    render() {
        const { countFeedback, options } = this.props;


        return (
            <div>
                {options.map((option) => (
                    <button
                        key={option}
                        name={option}
                        type='button'
                        className={styles.FeedbackButton}
                        onClick={countFeedback}>
                        {this.normalizeTitle(option)}
                    </button>
                )
                )}
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    countFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;