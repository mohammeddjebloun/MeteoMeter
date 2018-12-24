
using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.ViewModels;

namespace MeteoMeter.Backend.Api.NotificationsAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the NotificationsAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterNotificationsAAAAA")]
	public partial class NotificationsAAAAA : Controller
	{
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.NotificationsAAAAAController"/> class.
		/// </summary>
		public NotificationsAAAAA()
		{
		}

		[HttpPost]
		[Route("/api/notifications/registerTags")]
		public async Task<IActionResult> RegisterTags(TagRegisteraaaaaaaaaaaaaa tagRegister)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpPut]
		[Route("/api/notifications/unsubscribe")]
		public async Task<IActionResult> Unsubscribe(string installationId)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/notifications/registerForResults")]
		public async Task<IActionResult> NotifyForResult(string userId)
		{
			
			try
			{
				return NotFound();
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}