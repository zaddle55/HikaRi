import * as React from 'react';
import clsx from 'clsx';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList, TabsListProps } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel, TabPanelProps } from '@mui/base/TabPanel';
import { Tab as BaseTab, TabProps } from '@mui/base/Tab';
import { useTheme } from '@mui/system';

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn;

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseTabsList
      ref={ref}
      className={clsx(
        'mb-4 rounded-xl bg-purple-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg',
        className,
      )}
      {...other}
    />
  );
});

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  return (
    <BaseTab
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `font-sans ${
                ownerState.selected
                  ? 'text-purple-500 bg-white'
                  : 'text-white bg-transparent focus:text-white hover:bg-purple-400'
              } ${
                ownerState.disabled
                  ? 'cursor-not-allowed opacity-50'
                  : 'cursor-pointer'
              } text-sm leading-[1.3] font-semibold w-full py-2.5 px-3 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseTabPanel
      ref={ref}
      className={clsx(
        'py-5 px-3 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 rounded-xl opacity-60 w-full font-sans text-sm',
        className,
      )}
      {...other}
    />
  );
});

export default function UnstyledTabsIntroduction() {
    // Replace this with your app logic for determining dark mode
  
    return <>
    <div className={'dark'}>
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>My account</Tab>
        <Tab value={1}>Profile</Tab>
        <Tab value={2}>Language</Tab>
      </TabsList>
      <TabPanel value={0}>My account page</TabPanel>
      <TabPanel value={1}>Profile page</TabPanel>
      <TabPanel value={2}>Language page</TabPanel>
    </Tabs>
  </div>
  </>;
  }
