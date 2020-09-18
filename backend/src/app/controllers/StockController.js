import Stock from '../models/Stock';

class StockController {
    async update(req, res) {
        const plantAmount = await Stock.findOne({
            where: { plant_id: req.params.id },
        });

        const plantAmountUpdated = await plantAmount.update({
            amount: req.body.amount,
        });

        return res.send(plantAmountUpdated);
    }
}

export default new StockController();
