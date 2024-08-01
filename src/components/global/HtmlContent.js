import React from 'react';
import DOMPurify from 'dompurify';

const HtmlContent = ({as = 'div', html}) => {
	const sanitizedHtml = DOMPurify.sanitize(html);
	return React.createElement(as, {dangerouslySetInnerHTML: {__html: sanitizedHtml}});
};

export default HtmlContent;
