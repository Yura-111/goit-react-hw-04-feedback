import { useState } from 'react';

import {Statistics} from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Notification} from 'components/Notification/Notification';
import {Section} from 'components/Section/Section';



export const App = ({ title }) => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onUpdateStats = evt => {
        const targetName = evt.currentTarget.name;
    
        switch (targetName) {
          case 'good':
            setGood(good + 1);
            break;
          case 'neutral':
            setNeutral(neutral + 1);
            break;
          case 'bad':
            setBad(bad + 1);
            break;
          default:
            break;
        }
      };

      const totalFeedback = good + neutral + bad;
      const positiveFeedback = Number.parseInt((good * 100)/ totalFeedback);

        return (
            <>
                <Section title={'Please leve Feedback'}>                    
                    <FeedbackOptions
                        onLeaveFeedback={onUpdateStats}
                        options={['good', 'neutral', 'bad']}
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
                    <Notification message='There is no feedback' />
                    )}
                </Section>
            </>
        )
    }



