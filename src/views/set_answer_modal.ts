export default {
  type: 'modal',
  title: {
    type: 'plain_text',
    text: 'Stinkypinky',
    emoji: true
  },
  submit: {
    type: 'plain_text',
    text: 'Submit',
    emoji: true
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
    emoji: true
  },
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Congratulations! Please enter the new answer and hint.*'
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Answer'
      },
      element: {
        type: 'plain_text_input',
        action_id: 'input1',
        placeholder: {
          type: 'plain_text',
          text: 'Type answer here'
        },
        multiline: false
      },
      optional: false
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Hint'
      },
      element: {
        type: 'plain_text_input',
        action_id: 'input1',
        placeholder: {
          type: 'plain_text',
          text: 'Type hint here'
        },
        multiline: true
      },
      optional: false
    }
  ]
};
