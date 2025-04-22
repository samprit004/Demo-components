import { TextInput } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component:
          'A versatile TextInput component with theme support, variants, and accessibility. Allows customization of size, color, border style, and more.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'You cannot type here',
    disabled: true,
  },
};

export const DarkModePreview: Story = {
  args: {
    label: 'Dark Mode Input',
    placeholder: 'Dark mode enabled',
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-900 p-4 min-h-screen text-white">
        <Story />
      </div>
    ),
  ],
};


export const SizeVariants: Story = {
  args: {
    label: 'Size Variants',
    placeholder: 'Choose a size',
  },
  render: (args) => (
    <div className="space-y-4">
      <TextInput {...args} size="sm" label="Small Input" placeholder="Small input" />
      <TextInput {...args} size="md" label="Medium Input" placeholder="Medium input" />
      <TextInput {...args} size="lg" label="Large Input" placeholder="Large input" />
    </div>
  ),
};

export const ColorVariants: Story = {
  args: {
    label: 'Color Variants',
    placeholder: 'Choose a color',
  },
  render: (args) => (
    <div className="space-y-4">
      <TextInput {...args} color="primary" label="Primary Input" placeholder="Primary input" />
      <TextInput {...args} color="secondary" label="Secondary Input" placeholder="Secondary input" />
      <TextInput {...args} color="accent" label="Accent Input" placeholder="Accent input" />
    </div>
  ),
};

export const BorderStyleVariants: Story = {
  args: {
    label: 'Border Style Variants',
    placeholder: 'Choose a border style',
  },
  render: (args) => (
    <div className="space-y-4">
      <TextInput {...args} borderStyle="solid" label="Solid Border" placeholder="Solid border" />
      <TextInput {...args} borderStyle="dashed" label="Dashed Border" placeholder="Dashed border" />
      <TextInput {...args} borderStyle="dotted" label="Dotted Border" placeholder="Dotted border" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
  },
  render: (args) => <TextInput {...args} fullWidth={true} />,
};
