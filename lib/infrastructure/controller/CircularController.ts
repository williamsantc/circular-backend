import { Router } from 'express';
import { HandlerCircularFindAll } from '../../application/handler/HandlerCircularFindAll';
import { HandlerCircularCreate } from '../../application/handler/HandlerCircularCreate';
import { CircularDto } from '../../application/dto/CircularDto';

export const circularController = Router();

circularController.get('/all', async (req, res, next) => {
  try {
    const handlerFindAll : HandlerCircularFindAll = HandlerCircularFindAll.getInstance();
    res.json(await handlerFindAll.handle());
  } catch (e) {
    next(e);
  }
})

circularController.post('', async (req, res, next) => {
  try {
    const handlerCircularCreate : HandlerCircularCreate = HandlerCircularCreate.getInstance();
    const circularDto : CircularDto = req.body;
    const msg : String = await handlerCircularCreate.exec(circularDto);
    res.json({msg});
  } catch (e) {
    next(e);
  }
});
