let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors());
app.use(express.static('../static'));

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
