export const COMPLAINTPROCESSING = {
    name: 'Complaint Processing',
    path: '/complaintprocessing',
    routes: {
      qc: {
        name: 'QC',
        path: 'qc'
      },
      entry: {
        name: 'Entry',
        path: 'entry'
      }
    }
}

export const ANALYTICS = {
  name: 'Analytics',
  path: '/analytics',
  routes: {
    predictive: {
      name: 'Predictive Models',
      path: '/analytics/predictive'
    },
    nlp: {
      name: 'NLP',
      path: '/analytics/nlp'
    },
    ocr: {
      name: 'OCR',
      path: '/analytics/ocr'
    },
    training: {
      name: 'Supervised Training',
      path: '/analytics/training'
    }
  }
}
