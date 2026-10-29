import { Component, Input } from '@angular/core';
import { SITE } from '../site';

@Component({
  selector: 'app-skill-guide',
  standalone: true,
  template: `
    <section class="skill-guide" [class.skill-guide-compact]="compact">
      <img src="assets/tennis-canada-logo.png" alt="Tennis Canada" class="skill-guide-logo" />
      <div class="skill-guide-copy">
        <p class="skill-guide-kicker">Tennis Canada</p>
        <h3 class="skill-guide-title">What's my tennis level?</h3>
        <p class="skill-guide-text">
          We use Tennis Canada's 1.0–5.0 self-rating scale so hitting sessions and tournament matchups land at the right pace.
          Prime beginner lessons are for a self-reported <strong>2.0 or lower</strong>.
        </p>
        <div class="skill-guide-actions">
          <a class="skill-guide-link" [href]="guideUrl" target="_blank" rel="noopener noreferrer">
            Read the Tennis Canada Self-Rating Guide
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
          <a class="skill-guide-pdf" [href]="pdfUrl" target="_blank" rel="noopener noreferrer">PDF version</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-guide {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 1.75rem;
      background: #fff;
      border: 1px solid rgba(29, 78, 216, 0.12);
      border-radius: 0.75rem;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
      text-align: center;
    }
    @media (min-width: 768px) {
      .skill-guide {
        flex-direction: row;
        text-align: left;
        padding: 2rem 2.25rem;
      }
    }
    .skill-guide-logo {
      width: 7.5rem;
      height: 7.5rem;
      object-fit: contain;
      flex-shrink: 0;
    }
    .skill-guide-kicker {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ubc-blue-600);
      margin: 0 0 0.35rem;
    }
    .skill-guide-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--ubc-deep-blue);
      margin: 0 0 0.5rem;
    }
    .skill-guide-text {
      margin: 0 0 1rem;
      color: var(--ubc-deep-blue);
      opacity: 0.8;
      line-height: 1.6;
    }
    .skill-guide-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 700;
      color: var(--ubc-blue-600);
      text-decoration: none;
    }
    .skill-guide-link:hover { text-decoration: underline; }
    .skill-guide-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem 1.25rem;
      justify-content: inherit;
    }
    .skill-guide-pdf {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--ubc-deep-blue);
      opacity: 0.7;
    }
    .skill-guide-compact .skill-guide-logo {
      width: 5.5rem;
      height: 5.5rem;
    }
  `],
})
export class SkillGuideComponent {
  @Input() compact = false;
  guideUrl = SITE.tennisCanadaGuide;
  pdfUrl = SITE.tennisCanadaPdf;
}
