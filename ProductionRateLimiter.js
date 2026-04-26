const paymentLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: (req) => {
    if (req.user?.plan === "enterprise") return 100;
    return 20;
  },
  keyGenerator: (req) => {
    return req.user?.id || req.headers["x-api-key"] || req.ip;
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.warn("Rate limit exceeded", {
      userId: req.user?.id,
      ip: req.ip,
      path: req.path,
    });

    res.status(429).json({
      success: false,
      message: "Too many requests. Please try again later.",
    });
  },
  store: new RedisStore({
    sendCommand: (...args) => redis.call(...args),
  }),
});