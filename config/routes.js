const express = require("express");
const controllers = require("../app/controllers");
const expresslayouts = require("express-ejs-layouts");
const bp = require("body-parser");

const apiRouter = express();

apiRouter.use(bp.json());
apiRouter.use(bp.urlencoded({ extended: true }));
apiRouter.set("view engine", "ejs");
apiRouter.use(expresslayouts);
apiRouter.use(express.static("public"));

apiRouter.get("/", controllers.pageController.pageHome);
apiRouter.get("/signin", controllers.pageController.pageSignin);
apiRouter.post("/signin", controllers.userController.signin);
apiRouter.get("/signup", controllers.pageController.pageSignup);
apiRouter.post("/signup", controllers.userController.signup);
apiRouter.get("/logout", controllers.userController.logout);
apiRouter.get("/dashboardAdmin/:role", controllers.pageController.pageDashboardAdminUsers);
apiRouter.get("/orderTukang/:service", controllers.pageController.pageOrderTukang);
apiRouter.get("/detailOrder/:id", controllers.pageController.pageDetailOrder);
apiRouter.post("/addPesanan", controllers.orderController.create);
apiRouter.get("/pesananSaya/:status", controllers.pageController.pagePesanan);
apiRouter.get("/updatePesanan/:status/:id", controllers.orderController.update);
apiRouter.get("/feedbacks/:id_tukang", controllers.pageController.pageFeedbacks);
apiRouter.post("/addFeedbacks", controllers.feedbacksController.create);
apiRouter.get("/data-pesanan/:category", controllers.pageController.pageDataPesanan);
apiRouter.get("/akun/delete/:id", controllers.userController.delete);
apiRouter.get("/pesanan/delete/:id", controllers.orderController.delete);
apiRouter.get("/dashboardFeedback", controllers.pageController.pageDashboardFeedback);
apiRouter.get("/feedback/delete/:id", controllers.feedbacksController.delete);



module.exports = apiRouter;