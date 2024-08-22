'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type MouseEvent,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { Show } from '../components/Show'
import { NotificationHeading } from '../components/NotificationHeading'
import { NotificationDescription } from '../components/NotificationDescription'
import { Notification } from '../components/Notification'
import { vstack } from '@cerberus-design/styled-system/patterns'
import { Portal, type PortalProps } from '../components/Portal'
import { cx } from '@cerberus-design/styled-system/css'
import { notification } from '@cerberus-design/styled-system/recipes'

/**
 * This module provides a context and hook for notifications.
 * @module
 */

export interface NotifyOptions {
  palette: 'info' | 'success' | 'warning' | 'danger'
  heading: string
  id?: string
  description?: ReactNode
  onClose?: () => void
}

export interface NotificationsValue {
  notify: (options: NotifyOptions) => void
}

const NotificationsContext = createContext<NotificationsValue | null>(null)

export interface NotificationsProviderProps extends PortalProps {}

/**
 * Provides a notification center to the app.
 * @example
 * ```tsx
 * // Wrap the Provider around the root of the feature.
 * <Notifications>
 *   <SomeFeatureSection />
 * </Notifications>
 *
 * // Use the hook to show a notification.
 * const notify = useNotifications()
 *
 * const handleClick = useCallback(() => {
 *  notify({
 *   palette: 'info',
 *   heading: 'New feature!',
 *   description: 'We have added a new feature to the app.',
 * })
 * }, [notify])
 * ```
 */
export function NotificationCenter(
  props: PropsWithChildren<NotificationsProviderProps>,
) {
  const [activeNotifications, setActiveNotifications] = useState<
    NotifyOptions[]
  >([])

  const handleNotify = useCallback((options: NotifyOptions) => {
    setActiveNotifications((prev) => {
      const id = `${options.palette}:${prev.length + 1}`
      return [...prev, { ...options, id }]
    })
  }, [])

  const handleClose = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    setActiveNotifications((prev) => {
      const item = prev.find((option) => option.id === target.value)
      if (item?.onClose) item.onClose()
      return prev.filter((option) => option.id !== target.value)
    })
  }, [])

  const value = useMemo(
    () => ({
      notify: handleNotify,
    }),
    [handleNotify],
  )

  // For some reason, the vstack pattern alignItems is not registering here.
  // So we are forcing it with the style prop.

  return (
    <NotificationsContext.Provider value={value}>
      {props.children}

      <Show when={activeNotifications.length > 0}>
        <Portal container={props.container}>
          <div
            className={cx(
              notification().center,
              vstack({
                alignItems: 'flex-end',
                gap: '4',
              }),
            )}
            style={{
              alignItems: 'flex-end',
            }}
          >
            {activeNotifications.map((option) => (
              <Notification
                id={option.id!}
                key={option.id}
                onClose={handleClose}
                open
                palette={option.palette}
              >
                <NotificationHeading palette={option.palette}>
                  {option.heading}
                </NotificationHeading>
                <NotificationDescription palette={option.palette}>
                  {option.description}
                </NotificationDescription>
              </Notification>
            ))}
          </div>
        </Portal>
      </Show>
    </NotificationsContext.Provider>
  )
}

/**
 * The hook to use the NotificationCenter.
 * @returns The notify method to trigger a notification.
 * @example
 * ```tsx
 * const {notify} = useNotificationCenter()
 * notify({
 *  palette: 'info',
 *  heading: 'New feature',
 *  description: 'We have added a new feature to the app.',
 * })
 * ```
 */
export function useNotificationCenter(): NotificationsValue {
  const context = useContext(NotificationsContext)
  if (!context) {
    throw new Error(
      'useNotificationCenter must be used within a NotificationsProvider',
    )
  }
  return context
}