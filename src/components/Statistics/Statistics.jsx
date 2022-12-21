import PropTypes  from "prop-types";
import {Title, Description} from 'components/Statistics/Statistics.styled'

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <>
            <Title>Statistics</Title>
            <Description>Good: {good}</Description>
            <Description>Neutral: {neutral}</Description>
            <Description>Bad: {bad}</Description>
            <Description>Total: {total}</Description>
            <Description>Positive feedback: {total > 0 ? positivePercentage : 0}%</Description>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}