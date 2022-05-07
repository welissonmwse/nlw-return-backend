import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository';
import express from 'express'

import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemiler-mail-adapter';

export const routes = express.Router();



routes.post('/feedback', async (req, res) => {
  const {type, comment, screenshot} = req.body

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository, 
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  res.status(201).send()
})