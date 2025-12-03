'use strict';

/**
 * Google Services plugin
 * Provides integration with Google Sheets, Drive, and Analytics
 */

module.exports = ({ strapi }) => ({
  /**
   * Fetch data from Google Sheets
   */
  async fetchSheetsData(spreadsheetId, range, accessToken) {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Google Sheets API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      strapi.log.error('Error fetching Google Sheets data:', error);
      throw error;
    }
  },

  /**
   * Upload file to Google Drive
   */
  async uploadToDrive(file, folderId, accessToken) {
    try {
      // First, upload the file
      const metadata = {
        name: file.name,
        parents: folderId ? [folderId] : [],
      };

      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', file);

      const response = await fetch(
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error(`Google Drive API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      strapi.log.error('Error uploading to Google Drive:', error);
      throw error;
    }
  },

  /**
   * Get Google Analytics data
   */
  async getAnalyticsData(viewId, startDate, endDate, metrics, accessToken) {
    try {
      const response = await fetch(
        `https://analyticsreporting.googleapis.com/v4/reports:batchGet`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reportRequests: [
              {
                viewId,
                dateRanges: [
                  {
                    startDate,
                    endDate,
                  },
                ],
                metrics: metrics.map(m => ({ expression: m })),
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Google Analytics API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      strapi.log.error('Error fetching Google Analytics data:', error);
      throw error;
    }
  },
});

