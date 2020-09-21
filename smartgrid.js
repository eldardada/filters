module.exports = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '20px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1600px', /* max-width оn very large screen */
        fields: '10px' /* side fields */
    },
    breakPoints: {
        xxx: {
            width: "1500px",
        },
        md: {
            width: "920px",
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px"
        }
    }
};