export const getUser = (id) => {
  return new Promise(function (resolve) {
    window.VK.api('users.get', { user_ids: id, fields: 'photo_50' }, function (data) {
      resolve(data.response[0]);
    });
  })
}