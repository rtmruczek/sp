export default {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          'Congratulations on the #stinkypinky victory. Please set a new answer and hint by clicking the button below.'
      }
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Set new hint and answer',
            emoji: true
          },
          value: 'stinkypinky_set_answer'
        }
      ]
    }
  ]
};
