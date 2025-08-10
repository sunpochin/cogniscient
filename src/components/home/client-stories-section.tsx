/**
 * 客戶案例區塊。
 * 以網格形式展示多個客戶案例(ClientStoryComponent)。
 */
import ClientStoryComponent from '../client-story-component';

export function ClientStoriesSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ClientStoryComponent />
        <ClientStoryComponent />
        <ClientStoryComponent />
        <ClientStoryComponent />
      </div>
    </section>
  );
}
