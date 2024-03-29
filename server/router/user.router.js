const express = require("express");
const { sign_up, sign_in, delete_account, update_account, get_user_info} = require("../controller/user");
const jwt = require("jsonwebtoken");
const {is_auth} = require("../middleware/auth");
const router = express.Router();

router.post("/sign", async (req, res) => {
  const { username, password, email } = req.body;
  const response = await sign_up({ username, password, email });

  if (response.success) {
    res.json({
      message: "User successfully create 💚",
      result: response,
      status: 200,
      success: response.success
    })
  } else {
    res.status(400).json({
      message: response.message,
      status: 400,
      success: response.success
    })
  }

});

router.post("/auth", async (req, res) => {
    const { username, password } = req.body;
    const response = await sign_in({ username, password });

    if (response.success) {
        res.status(200).json({
          message: "User is now login 💚",
          result: response,
          status: 200,
          success: response.success
        });
    } else {
        res.status(401).json({
          message: response.message,
          status: 401,
          success: response.success
        });
    }
});

router.delete("/:id", is_auth, async (req, res) => {
  const id = req.params.id;
  const response = await delete_account(id);

  if (!response.success) {
    return res.status(500).json({
      message: response.message,
      status: 500,
    });
  }

  res.status(200).json({
    message: response.message,
    status: 200,
  });
});

router.put("/:id", is_auth, async (req, res) => {
  const id = req.params.id;
  const { username, password, email } = req.body;

  try {
    const response = await update_account({id, username, password, email});

    res.status(200).json({
      message: "User successfully updated 💚",
      result: response,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user 💔",
      result: error,
      status: 500,
    });
  }
});

router.get("/info", is_auth, async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "")
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const response = await get_user_info(payload.id);

    res.status(200).json({
      message: "Info user successfully getting 💚",
      result: response,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
        message: "Failed to get user information 💔",
      result: error,
      status: 500,
    });
  }
});

module.exports = router;
