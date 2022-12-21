import PropTypes from 'prop-types';
import {NotificationStyled} from "components/Notification/Notification.styled"

export const Notification = ({message}) => {
    return (
        <NotificationStyled>{message}</NotificationStyled>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};