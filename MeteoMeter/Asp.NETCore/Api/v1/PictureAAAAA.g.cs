
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

namespace MeteoMeter.Backend.Api.PictureAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the PictureAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterPictureAAAAA")]
	public partial class PictureAAAAA : Controller
	{
		private IPictureService _PictureService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.PictureAAAAAController"/> class.
		/// </summary>
		public PictureAAAAA(IPictureService PictureService)
		{
			_PictureService = PictureService;
		}

		[HttpGet]
		[Route("/api/picture/get")]
		[ProducesResponseType(typeof(Pictureaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> Get(int pictureId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Pictureaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpPost]
		[Route("/api/picture/create")]
		public async Task<IActionResult> Create(Pictureaaaaaaaaaaaaaa picture)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Picture =  picture.GetPictureFromViewModel();
				await _PictureService.Save(Picture );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}
	}
}