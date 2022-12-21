import { Component } from 'react';

import {Statistics} from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Notification} from 'components/Notification/Notification';
import {Section} from 'components/Section/Section';



export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

  onUpdateStats = event => {
    const targetName = event.currentTarget.name;

    this.setState(prevState => ({ [targetName]: prevState[targetName] + 1 }));
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedback() {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
}
    render () {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback(this.state);
        const positiveFeedback = this.countPositiveFeedback();
        const message = 'There is no feedback';

        return (
            <>
                <Section title={'Please leve Feedback'}>                    
                    <FeedbackOptions
                        onLeaveFeedback={this.onUpdateStats}
                        options={Object.keys(this.state)}
                        />
                </Section>
                
                <Section title={'Statistics'}>
                    {totalFeedback > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positiveFeedback}
                    />
                    ) : (
                    <Notification message={message} />
                    )}
                </Section>
            </>
        )
    }
}



