import Bee from 'bee-queue'

import CancellationMail from '../app/jobs/CancellationMail'
import redisConfig from '../config/redis'

const jobs = [CancellationMail]

class Queue {
  constructor() {
    this.queues = {}
    this.init()
  }
  init() {
    jobs.forEach(({ key, hundle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        hundle,
      }
    })
  }
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save()
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, hundle } = this.queues[job.key]
      bee.on('failed', this.hundleFailure).process(hundle)
    })
  }
  hundleFailure(job, error) {
    console.log(`Queue ${job.queue.name}: FAILED`, error)
  }
}

export default new Queue()
