const DoctorAvailability = {
  slug: 'doctor-availability',
  admin: {
    useAsTitle: 'doctor',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'doctor',
      type: 'relationship',
      relationTo: 'doctors',
      required: true,
    },
    {
      name: 'month',
      type: 'number',
      required: true,
      min: 1,
      max: 12,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'workingDays',
      type: 'array',
      fields: [
        {
          name: 'dayOfWeek',
          type: 'select',
          options: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          required: true,
        },
        {
          name: 'isAvailable',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'startTime',
          type: 'text',
          admin: { placeholder: '09:00' },
          required: true,
        },
        {
          name: 'endTime',
          type: 'text',
          admin: { placeholder: '17:00' },
          required: true,
        },
        {
          name: 'slotDurationMinutes',
          type: 'number',
          defaultValue: 30,
          required: true,
        },
        {
          name: 'lunchStartTime',
          type: 'text',
          admin: { placeholder: '13:00' },
        },
        {
          name: 'lunchEndTime',
          type: 'text',
          admin: { placeholder: '14:00' },
        },
      ],
    },
    {
      name: 'blockedDates',
      type: 'array',
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'reason',
          type: 'text',
        },
      ],
    },
  ],
};

module.exports = DoctorAvailability;
