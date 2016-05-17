var BodyBox = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			age: ''
		}
	},
	handleSubmit: function() {
		var name = this.state.name;
		var age = this.state.age;
		var data = {
			name: name,
			age: age
		};
		console.log('in handleSubmit');
		$.ajax({
			url : '/prp' ,
			dataType: 'json',
			type: 'POST',
			data: data,
			success : function(data) {
				//this.setState( {data: data });
				console.log('in success');
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState( {name: '', age: '' });
				console.log('in error');
				console.error( status, err.toString());
			}.bind(this)
		})
	},

	render: function() {
		return (
			<div class="prp">
				<h2> Payment Receiving Preferences </h2>
				<div class="content"> {this.state.name} is name </div>
				<div class="content"> {this.state.age} is age </div>
				<form name="prpForm" onSubmit= {this.handleSubmit} >
					<input type="text" value={this.state.name} placeholder="name"/>
					<input type="text" value={this.state.age} placeholder="age" />
					<input type="submit" value="SUBMIT" />
				</form>
			</div>
		)
	}
});


ReactDOM.render (
	<BodyBox />,
	document.getElementById('content')
);