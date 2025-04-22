import { Toast } from './Toast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          'A versatile Toast component with variant, size, border style, and dark mode support.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'This is a default info toast message.',
  },
};

export const SuccessToast: Story = {
  args: {
    message: 'Success! Your action was completed successfully.',
    variant: 'success',
  },
};

export const ErrorToast: Story = {
  args: {
    message: 'Error! Something went wrong.',
    variant: 'error',
  },
};

export const WarningToast: Story = {
  args: {
    message: 'Warning! Please check your input.',
    variant: 'warning',
  },
};

export const DarkModeToast: Story = {
  args: {
    message: 'This is a toast in dark mode.',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
