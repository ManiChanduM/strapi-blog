module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '018c9b805c00c0f6f8e75e0328048d91'),
  },
});
