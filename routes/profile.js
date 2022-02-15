// // const upload = multer({ dest: "upload/" });
// const isAuth = require("../middleware/isAuth");
// const express = require("express");
// const { uploadProfil } = require("../controllers/upload");

// const multer= require("multer")
// const path =require("path");
// const storage= multer.diskStorage({
//     destination:function (req,file, cb){
//         cb(null,'../client/public/uploads/profiles')
//     },
//         fileName:function(req,file,cb){
//             // console.log (file)
//             cb(null, file.fieldname+'-'+ Date.now()+ path.extname(file.originalname))
//             }
//            }) ;

//     const upload= multer({storage: storage})

// // require Router
// const router = express.Router();

// // test
// router.get("/test", (req, res) => {
//   res.send("hiiii test");
// });

// // ?route uplooad
// /* photo profile route
//  * @desc: upload profile photo profile
//  * @method:post
//  * @path:/upload
//  * @data: req.body
//  * */

//  router.post("/upload", isAuth, upload.single("file"), uploadProfil);

// /*get curent profile route
//  * @desc: get current profile
//  * @method:get
//  * @path:/current
//  * @data: null
//  */

// // router.get("/me", isAuth, currentProfile);

// /*create or update profile route
//  * @desc: create or update profile
//  * @method:post
//  * @path: '/http://localhost:8200/api/profile/'
//  * @data: req.body
//  */

// // router.post('/', isAuth,createUp)

// /*Route: DELETE api/profile
//  * @desc: Delete profile
//  * @method: delete
//  * @path: '/http://localhost:8200/api/profile/:_id'
//  * @data: req.params
//  * @Access: Private (admin)
//  */
// // router.delete("/:id", deletePro);

// // router export
// module.exports = router;
