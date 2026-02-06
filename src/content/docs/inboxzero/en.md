---
title: "InboxZero User Manual"
app: "inboxzero"
lang: "en"
---

# InboxZero User Manual

> Keep your Downloads folder clean! Automatic file organizer for macOS

---

## Table of Contents

1. [What is InboxZero?](#1-what-is-inboxzero)
2. [Getting Started](#2-getting-started)
3. [Using the Dashboard](#3-using-the-dashboard)
4. [Using the Menu Bar](#4-using-the-menu-bar)
5. [Creating Rules](#5-creating-rules)
6. [Using Presets](#6-using-presets)
7. [Cleaning Files](#7-cleaning-files)
8. [Undo](#8-undo)
9. [Activity Log](#9-activity-log)
10. [Auto-Clean Settings](#10-auto-clean-settings)
11. [Using Quarantine](#11-using-quarantine)
12. [Settings](#12-settings)
13. [Pricing Plans](#13-pricing-plans)

---

## 1. What is InboxZero?

InboxZero is an app that **automatically organizes files** in your Downloads folder or Desktop according to your rules.

### Who is this for?

- People whose Downloads folder is always messy
- People who don't want to spend time organizing files
- People who want to manage files systematically

### Basic Workflow

```
1. Select folders to organize (e.g., Downloads)
2. Set up rules (e.g., Move PDFs to Documents folder)
3. Click the Clean button
4. Done! Files are automatically organized
```

---

## 2. Getting Started

When you first launch the app, the setup wizard starts automatically.

### Step 1: Welcome Screen

Click the **Get Started** button to begin.

### Step 2: Select Folders to Organize

- **Downloads** — Downloads folder (selected by default)
- **Desktop** — Desktop
- **Add Custom Folder...** — Choose your own folder

> You can select multiple folders at once. Click **Scan Folders** to proceed to the next step.

### Step 3: Select Presets

Choose from pre-made rule collections:

- **General** — For general users (images, documents, videos, etc.)
- **Developer** — For developers (code, config files, etc.)
- **Designer** — For designers (PSD, Sketch, etc.)

> You can skip this step by clicking **Skip**. If you select presets, click **Apply & Continue** to proceed. You can always change these later in Settings.

### Step 4: Scan Results

Shows the current file status in your selected folders. Click **Continue** to proceed to the next step.

> You can click **Back** to return to the previous step at any time.

### Step 5: Choose Your Plan

- **Start 14-Day Free Trial** — Try all features for free
- **Continue with Free Plan** — Use basic features only

---

## 3. Using the Dashboard

The Dashboard is the main screen of InboxZero.

### Opening the Dashboard

- Click the menu bar icon → Select **Open InboxZero**
- Or use shortcut `⌘O`

### Screen Layout

| Area | Description |
|------|-------------|
| **Top Stats** | Pending file count, files organized today, last clean time |
| **File List** | Files to be organized and their planned destinations |
| **Bottom Buttons** | Clean Now, Undo, Activity, Settings |

### File Preview

Click the **eye icon** next to a file to preview its contents.

### Warning Icons Guide

| Icon | Meaning |
|------|---------|
| ⚠️ | Large file (500MB or more) |
| 🔒 | No access permission or file in use |
| ☁️ | iCloud-only file (not downloaded locally) |
| 📄📄 | File with same name already exists |

---

## 4. Using the Menu Bar

InboxZero is always visible in the menu bar.

### Menu Items

| Menu | Shortcut | Description |
|------|----------|-------------|
| Open InboxZero | `⌘O` | Open Dashboard |
| Clean Now | `⌘K` | Run clean immediately |
| Undo Last Action | `⌘Z` | Undo last operation |
| Manage Rules... | `⌘,` | Open rule management |
| Activity Log... | `⌘L` | View activity log |
| Settings... | — | Open settings |
| Quit InboxZero | `⌘Q` | Quit app |

---

## 5. Creating Rules

Rules define "which files go where."

### Adding a Rule

1. **Settings** → **Rules** tab
2. Click the **+** button
3. Enter rule name
4. Set conditions (e.g., extension is pdf)
5. Choose action (e.g., move to Documents folder)
6. Click **Save**

### Available Conditions

#### Basic Conditions (Free)

| Condition | Description | Example |
|-----------|-------------|---------|
| File Extension | Match specific extensions | png, jpg, pdf |
| Filename Contains | Name contains specific word | Screenshot |
| File Size | Above/below specific size | Over 100MB |
| File Type | Category like image, video | Image, Document |

#### Advanced Conditions (Pro)

| Condition | Description | Example |
|-----------|-------------|---------|
| Regex Pattern | Complex name pattern matching | report_2024 |
| Creation Date | Before/after specific date | Before January 2024 |
| Modified Date | Based on last modification | Within last 7 days |
| File Age | Files older/newer than N days | Files over 30 days old |
| Duplicate Files | Detect files with same content | — |

### Available Actions

| Action | Description |
|--------|-------------|
| **Move to Folder** | Move to specified folder |
| **Move to Date Folder** | Auto-create year/month folders and move |
| **Quarantine** (Pro) | Temporarily hold then auto-delete |
| **Exclude** | Exclude from this rule (don't touch) |

### Rule Order

- Rules at the top are applied first
- Drag to reorder rules

---

## 6. Using Presets

Presets are pre-made collections of rules.

### General Preset

Basic rules for general users:

- Installers (dmg, pkg) → Installers folder
- Archives (zip, rar) → Archives folder
- Images → Images/Year-Month folder
- Documents (pdf, docx) → Documents folder
- Videos/Music → Media/Year-Month folder
- Screenshots → Screenshots/Year-Month folder
- Large files (500MB+) → Large Files folder

### Developer Preset

Rules for developers:

- Code files → Dev/Code folder
- Config files (json, yaml) → Dev/Config folder
- Log files → Dev/Logs/Year-Month folder
- Database files → Dev/Database folder
- Shell scripts → Dev/Scripts folder

### Designer Preset

Rules for designers:

- Design sources (psd, sketch, fig) → Design/Sources folder
- Exports (png, svg) → Design/Exports/Year-Month folder
- Font files → Design/Fonts folder
- 3D/Motion files → Design/3D & Motion/Year-Month folder

### Applying Presets

1. **Settings** → **Rules** tab
2. Click **Load Preset** button
3. Select desired preset
4. Rules are automatically added

> Existing rules are kept; only new rules are added.

---

## 7. Cleaning Files

### Running a Clean

1. Review the file list in the Dashboard
2. Click **Clean Now** button
3. Select **Clean** in the confirmation dialog

### Or from the Menu Bar

- Click menu bar icon → **Clean Now** (`⌘K`)

### Clean Results

When cleaning is complete:
- System notification with results
- Detailed results available in Dashboard

### File Conflicts

If a file with the same name exists, a number is automatically added:
```
report.pdf → report (1).pdf → report (2).pdf
```

---

## 8. Undo

You can undo if you accidentally organized files incorrectly.

### Undo Methods

- **Dashboard** → **Undo** button
- **Menu Bar** → **Undo Last Action** (`⌘Z`)
- **Activity Log** → Undo individual files

### Undo Period

| Plan | Period |
|------|--------|
| Free | 24 hours |
| Pro / Trial | 30 days |

### When Undo is Not Possible

- File has been deleted or moved
- File contents have changed
- Undo period has expired

---

## 9. Activity Log

View all cleaning history.

### Opening Activity Log

- **Menu Bar** → **Activity Log...** (`⌘L`)
- **Dashboard** → **Activity History** button

### Information Available

Each cleaning record shows:
- Date and time of cleaning
- Number of files moved
- Number of failed files
- How it was triggered (manual/auto/scheduled)

### Individual File Undo

Expand a record to see undo buttons for each file.

### CSV Export (Pro)

Save activity log as CSV file:
- Today / Last 7 days / Last 30 days / All time

---

## 10. Auto-Clean Settings

Pro version allows automatic file cleaning.

### Scheduled Cleaning

Automatically cleans at set intervals.

**How to set up:**
1. **Settings** → **General** tab
2. Enable **Scheduled Cleaning**
3. Select interval (15min / 30min / 1hr / 2hr / 4hr / Daily)

### Quiet Hours

Stop auto-cleaning during specific times.

**How to set up:**
1. Enable **Quiet Hours**
2. Set start/end times (e.g., 22:00 ~ 08:00)

### Battery Options

- **Skip on Battery** — Only auto-clean when charging
- **Skip on Low Battery** — Skip when below 20%

### File Watcher

Automatically cleans when new files are created.

**How to set up:**
1. **Settings** → **General** tab
2. Enable **File Watcher**

> New downloads are automatically cleaned after 2 seconds.

### Clean on Startup

Automatically runs cleaning when the app starts.

**How to set up:**
1. **Settings** → **General** tab
2. Enable **Run on Startup**

---

## 11. Using Quarantine

Quarantine temporarily holds files instead of deleting them immediately.

### Creating Quarantine Rules

1. In rule edit, select **Move to Quarantine** as action
2. Set retention period (7 days / 30 days / 90 days)
3. Choose expiration action:
   - **Move to Trash** — Safe deletion
   - **Permanent Delete** — Complete deletion (not recoverable)
   - **Keep Forever** — Keep without deleting

### Managing Quarantined Files

1. **Settings** → **General** tab
2. Click **Manage Files...** in Quarantine section

### What You Can Do

- **Search** — Find by filename
- **Restore** — Return to original location
- **Check remaining days** — Green (plenty), Orange (expiring soon), Red (expiring)

### Empty Quarantine

To delete all quarantined files:
1. **Settings** → **General** tab
2. Click **Empty Quarantine...**

> This action cannot be undone.

---

## 12. Settings

### General

| Setting | Description |
|---------|-------------|
| Launch at Login | Auto-start when Mac starts (Pro) |
| Show in Dock | Show icon in Dock |
| Notifications | Notification settings |
| Scheduled Cleaning | Scheduled clean settings (Pro) |
| Quarantine | Manage quarantined files |

### Folders

Add or remove folders to organize.
- **+** button to add folder
- **-** button to remove folder

### Rules

Create and manage rules.
- Add/edit/delete rules
- Load presets
- Set exclude patterns

### Account

View current plan and manage purchases.

---

## 13. Pricing Plans

### Free Plan

- Maximum 2 rules
- Basic conditions only
- 24-hour undo

### Pro Plan ($9.99, one-time purchase)

- Unlimited rules
- All conditions available
- 30-day undo
- Scheduled cleaning
- File watcher
- Quarantine feature
- CSV export
- Launch at login

### 14-Day Free Trial

- Start without credit card
- Full Pro features for 14 days
- Automatically converts to Free plan after expiration

### How to Purchase

1. **Settings** → **Account** tab
2. Click **Upgrade to Pro**
3. Complete purchase in App Store

### Restore Purchases

If you already purchased on another Mac:
1. **Settings** → **Account** tab
2. Click **Restore Purchases**

---

## FAQ

### Q: Files are not being organized

- Check if the rule is enabled
- Check if the file matches the rule conditions
- If you see the 🔒 icon, it's a permission issue

### Q: Undo is not working

- Check if the undo period has passed (Free: 24 hours, Pro: 30 days)
- Check if the file has been moved or deleted

### Q: It says folder access permission is required

Go to System Settings → Privacy & Security → Full Disk Access and allow InboxZero.

### Q: Auto-cleaning is not working

- Check if you have Pro or Trial status
- Check if it's during Quiet Hours
- Check battery option settings

---

## Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| `⌘O` | Open Dashboard |
| `⌘K` | Clean Now |
| `⌘Z` | Undo |
| `⌘L` | Activity Log |
| `⌘,` | Open Settings |
| `⌘Q` | Quit App |

---

Start your clean Mac life with **InboxZero**!
