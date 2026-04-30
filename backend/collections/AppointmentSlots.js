const AppointmentSlots = {
  slug: 'appointment-slots',
  admin: {
    useAsTitle: 'startTime',
    defaultColumns: ['doctor', 'date', 'startTime', 'status'],
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
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'startTime',
      type: 'text',
      required: true,
    },
    {
      name: 'endTime',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Booked', value: 'booked' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Blocked', value: 'blocked' },
      ],
      defaultValue: 'available',
      required: true,
    },
    {
      name: 'appointment',
      type: 'relationship',
      relationTo: 'appointments',
    },
    {
      name: 'month',
      type: 'number',
    },
    {
      name: 'year',
      type: 'number',
    },
  ],
  indexes: [
    {
      fields: { doctor: 1, date: 1, startTime: 1 },
      options: { unique: true },
    },
  ],
};

module.exports = AppointmentSlots;
