import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { Label, Caption, HelperText } from './TextVariants';
import '../../index.css'; 

const meta: Meta = {
  title: 'Typography',
  parameters: {
    componentSubtitle: 'Typography components for headings, paragraphs, labels, captions, and helper text.',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e1e1e' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4 text-foreground bg-background p-4 rounded">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <div className="space-y-2 text-foreground bg-background p-4 rounded">
      <Paragraph size="sm">This is a small paragraph</Paragraph>
      <Paragraph size="md">This is a medium paragraph</Paragraph>
      <Paragraph size="lg">This is a large paragraph</Paragraph>
    </div>
  ),
};

export const LabelsAndHelpers: Story = {
  render: () => (
    <div className="space-y-2 text-foreground bg-background p-4 rounded">
      <Label>Email address</Label>
      <input type="email" className="border border-border rounded px-2 py-1 bg-input text-foreground" />
      <HelperText>This will not be shared publicly.</HelperText>
    </div>
  ),
};

export const CaptionAndHelperText: Story = {
  render: () => (
    <div className="space-y-2 text-foreground bg-background p-4 rounded">
      <Caption>This is a caption</Caption>
      <HelperText>Helper text goes here</HelperText>
    </div>
  ),
};