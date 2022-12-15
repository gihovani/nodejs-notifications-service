import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade.'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
  it('should be able to set and get notification variables', () => {
    const notificationCreatedAt = new Date();
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade.'),
      category: 'social',
      recipientId: 'example-recipient-id',
      createdAt: notificationCreatedAt,
    });

    const notificationContent = 'Nova solicitação de amizade2.';
    notification.content = new Content(notificationContent);
    expect(notification.content.value).toEqual(notificationContent);

    const notificationCategory = 'test';
    notification.category = notificationCategory;
    expect(notification.category).toEqual(notificationCategory);

    const notificationRecipientId = 'recipient-id';
    notification.recipientId = notificationRecipientId;
    expect(notification.recipientId).toEqual(notificationRecipientId);

    notification.read();
    expect(notification.readAt).toEqual(expect.any(Date));

    notification.unread();
    expect(notification.readAt).toBeNull();

    notification.cancel();
    expect(notification.canceledAt).toEqual(expect.any(Date));

    expect(notification.createdAt).toEqual(notificationCreatedAt);

    expect(notification.id).toBeTruthy();
  });
});
