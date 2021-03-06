import React from 'react';
import styled from '@emotion/styled';

import {isAuthenticated} from '../utils/auth';
import {Text as BaseText, TextContainer} from '../components/shared/Typography';

const Text = styled(BaseText)`
  text-align: center;
`;

export default () => {
    if (!isAuthenticated()) {
        return (
            <TextContainer>
                <Text>Redirecting you to the login screen...</Text>
            </TextContainer>
        );
    }
};
