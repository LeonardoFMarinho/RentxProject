import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateUserController } from '../modules/account/usecases/createUser/createUserController';
import { UpdateUserAvatarController } from '../modules/cars/useCases/updateUserAvatar/updateUseAvatarController';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();
usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticate,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
