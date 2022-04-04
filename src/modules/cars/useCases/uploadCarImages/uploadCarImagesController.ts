import { Request, response, Response } from 'express';
import { container } from 'tsyringe';

import { UploadCarImagesUseCase } from './uploadCarImagesUseCase';

interface IFiles {
  filename: string;
}

class UploadCarImagesController {
  async handle(request: Request, respose: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];
    const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);
    const images_name = images.map(file => file.filename);
    await uploadCarImagesUseCase.execute({
      car_id: id,
      images_name,
    });
    console.log(images_name);
    return response.status(201).send();
  }
}

export { UploadCarImagesController };
