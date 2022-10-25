import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './Switch';

export default {
	title: 'Switch',
	component: Switch,
	argTypes: {
		ref: { table: { disable: true } },
		component: { table: { disable: true } },
	},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
	disabled: false,
};
