/** Please write the sample code to debounce handleOnChange **/

var SearchBox = React.createClass({
    componentDidMount: function() {
        this.debouncedHandleOnChange = this.debounce(this.handleOnChange, 300);
    },

    debounce: function(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    },

    render: function() {
        return <input type="search" name="p" onChange={this.debouncedHandleOnChange} />;
    },

    handleOnChange: function(event) {
        // make ajax call
    }
});
