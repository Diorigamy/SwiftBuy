// src/components/SocialShare.js

import React from 'react';

const SocialShare = ({ product }) => {
    const shareProduct = () => {
        // Simulating social media sharing
        alert(`Shared ${product.name} on social media`);
    };

    return (
        <div>
            <button onClick={shareProduct}>Share</button>
        </div>
    );
};

export default SocialShare;

