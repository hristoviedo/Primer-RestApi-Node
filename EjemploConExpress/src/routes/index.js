const {Router} = require("express");
const router = Router();

router.get("/test", (req, res) => {
    const data = {
        firstName: "Juana",
        lastName: "Ruíz",
        userName: "jruiz32",
        age: 33,
        isDev: true,
    }
  res.json(data);
});

module.exports = router;