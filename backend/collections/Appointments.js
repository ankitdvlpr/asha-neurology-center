const Appointments = {
  slug: 'appointments',
  admin: {
    useAsTitle: 'patientName',
    defaultColumns: ['patientName', 'doctor', 'appointmentDate', 'status'],
  },
  access: {
    read: () => true,
    create: () => true, // Patients can book
  },
  hooks: {

    beforeValidate: [
      async ({ data, req }) => {
        // Auto-fill Date and Time from Slot if missing or changed
        if (data.slot) {
          try {
            const slotId = typeof data.slot === 'object' ? data.slot.id : data.slot;
            const slot = await req.payload.findByID({
              collection: 'appointment-slots',
              id: slotId,
            });
            if (slot) {
              data.appointmentDate = slot.date;
              data.appointmentTime = slot.startTime;
            }
          } catch (err) {
            req.payload.logger.error("Auto-fill failed");
          }
        }

        // Set createdAt on first creation
        if (!data.createdAt) {
          data.createdAt = new Date();
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: 'patientName',
      type: 'text',
      required: true,
    },
    {
      name: 'patientPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'patientEmail',
      type: 'email',
    },
    {
      name: 'patientAge',
      type: 'number',
    },
    {
      name: 'problem',
      type: 'textarea',
    },
    {
      name: 'doctor',
      type: 'relationship',
      relationTo: 'doctors',
      required: true,
    },
    {
      name: 'slot',
      type: 'relationship',
      relationTo: 'appointment-slots',
      required: true,
      filterOptions: () => {
        return {
          status: { equals: 'available' }
        };
      }
    },
    {
      name: 'appointmentDate',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'appointmentTime',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Success', value: 'success' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
  ],
};

module.exports = Appointments;
