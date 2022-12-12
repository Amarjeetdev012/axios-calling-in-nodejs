const express = require("express");
const axios = require("axios");
const { lstat } = require("fs");
const app = express();

// axios
//   .get("https://reqres.in/api/users")
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((err) => {
//     console.log(`err`);
//   });

//  method 1
// app.get("/async", async (req, res) => {
// 	try {
// 		const response = await axios({
// 			url: "https://reqres.in/api/users",
// 			method: "get",
// 		});
// 		res.status(200).json(response.data);
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

// method 2
// app.get("/promise", (req, res) => {
// 	axios({
// 		url: "https://reqres.in/api/users",
// 		method: "get",
// 	})
// 		.then(response => {
// 			res.status(200).json(response.data);
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ message: err });
// 		});
// });

// method 3
// axios.get("https://reqres.in/api/users")
// .then((result) => {
//     console.log(result.data)
// }).catch((err) => {
//     console.log(`err`)
// });
lstat
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
