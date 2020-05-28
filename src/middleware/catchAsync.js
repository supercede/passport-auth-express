export default catchAsync => async (request, response, next) => {
  try {
    await catchAsync(request, response, next);
  } catch (error) {
    return next(error);
  }
};
