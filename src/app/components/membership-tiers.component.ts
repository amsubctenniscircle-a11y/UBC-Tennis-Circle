import { Component } from '@angular/core';
import { SITE } from '../site';

@Component({
  selector: 'app-membership-tiers',
  standalone: true,
  template: `
    <div class="grid md:grid-cols-3 gap-6 max-w-full">
      <div class="card p-6 flex flex-col">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-[var(--ubc-deep-blue)] mb-2">Non-Member</h3>
          <div class="text-4xl font-extrabold text-gray-500">$0</div>
        </div>
        <div class="space-y-4 flex-grow">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <span class="text-sm text-gray-500">No membership card</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <span class="text-sm text-gray-500">No sponsor discounts</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <span class="text-sm text-gray-500">No WhatsApp group access</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <span class="text-sm text-gray-500">No early access to sessions</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm text-gray-500">Standard event rates</span>
          </div>
        </div>
        <div class="mt-6">
          <div class="bg-gray-100 text-gray-500 text-center rounded-full py-3 font-semibold cursor-not-allowed">
            No Membership
          </div>
        </div>
      </div>

      <div class="card p-6 rounded-b-lg flex flex-col border-4 border-[var(--ubc-blue-600)] bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden shadow-2xl">
        <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-[var(--ubc-blue-600)] text-white text-xs font-bold px-4 py-1.5 rounded-b-lg shadow-lg z-20">BEST VALUE</div>
        <div class="text-center mb-6 relative z-10 mt-4">
          <h3 class="text-2xl font-bold text-[var(--ubc-deep-blue)] mb-2">Prime Member</h3>
          <div class="text-4xl font-extrabold text-[var(--ubc-blue-600)]">$20</div>
        </div>
        <div class="space-y-4 flex-grow relative z-10">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">UBCTC Membership Card</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Discounts and perks from our sponsors, including Rackets & Runners, Kintec, and more</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Invite link to the UBCTC WhatsApp group</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Early access to our hitting sessions</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Discounted rates on socials and tennis lessons</span>
          </div>
          <div class="flex items-start gap-3 bg-yellow-50 -mx-2 px-2 py-2 rounded">
            <svg class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm font-semibold text-yellow-900">2 FREE beginner group lessons with a club instructor</span>
          </div>
        </div>
        <div class="mt-6 relative z-10">
          <div class="bg-gray-100 text-gray-500 text-center rounded-full py-3 font-semibold cursor-not-allowed">
            Only available in September
          </div>
        </div>
      </div>

      <div class="card p-6 flex flex-col border-2 border-[var(--ubc-blue-600)]">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-[var(--ubc-deep-blue)] mb-2">General Member</h3>
          <div class="text-4xl font-extrabold text-[var(--ubc-blue-600)]">$10</div>
        </div>
        <div class="space-y-4 flex-grow">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">UBCTC Membership Card</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Discounts and perks from our sponsors, including Rackets & Runners, Kintec, and more</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Invite link to the UBCTC WhatsApp group</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Early access to our hitting sessions</span>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-sm">Discounted rates on socials and tennis lessons</span>
          </div>
        </div>
        <div class="mt-6">
          <a [href]="generalForm" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center rounded-full py-3 block">Join as General Member</a>
        </div>
      </div>
    </div>
  `,
})
export class MembershipTiersComponent {
  generalForm = SITE.membershipGeneral;
}
